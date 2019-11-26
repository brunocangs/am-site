import React, { useRef, useState, useEffect } from "react";
import { Banner } from "../components/Header";
import { Content } from "../components/SearchComponents";
import { Contact } from "../components/ContactComponents";
import { graphql, Link } from "gatsby";
import Fuse from "fuse.js";
import qs from "querystring";
import Helmet from "react-helmet";

const fieldsPriority = [
  "body",
  "summary",
  "description",
  "title",
  "clientName",
  "clientLocation"
];

const flatten = ({ node: r }) => {
  r.body = r.html.replace(/<[^>]*>/g, "");
  r = { ...r, ...r.frontmatter, ...r.fields };
  delete r.frontmatter;
  delete r.html;
  delete r.fields;
  return r;
};

const onChange = cb => ({ target: { value } }) => cb(value);

const splitMatch = match => {
  let { value, indices } = match;
  if (!value) return null;
  let end = "";
  if (value.length > 120) end = "...";
  value = value.slice(0, 120);
  let index = 0;
  let results = indices.filter(curr => curr[1] + 1 - curr[0] > 2);
  if (results.length === 0) results = indices;
  const initial = [];
  if (results && results[0] && results[0][0] > 6) {
    initial.push(<span key={-1}>...</span>);
    index = 4;
  }
  results = results.reduce((prev, curr, i) => {
    prev.push(
      <span key={`${i}-${curr[0]}`}>
        {value.slice(index, (index = curr[0]))}
      </span>
    );
    prev.push(
      <strong key={`${i}-${curr[1] + 1}`}>
        {value.slice(index, (index = curr[1] + 1))}
      </strong>
    );
    return prev;
  }, initial);
  results.push(<span key={130}>{value.slice(index, 125)}</span>);
  return (
    <>
      {results}
      {end}
    </>
  );
};

const renderType = ({ templateKey, language }) => {
  if (language === "en") {
    switch (templateKey) {
      case "blog-post":
        return "Blog";
      case "project-page":
        return "Project";
      case "technology-page":
        return "Technology";
      default:
        return "";
    }
  } else {
    switch (templateKey) {
      case "blog-post":
        return "Blog";
      case "project-page":
        return "Projeto";
      case "technology-page":
        return "Tecnologia";
      default:
        return "";
    }
  }
};

const renderResults = ({ item: result, matches }, i) => {
  const [match] = matches.sort(
    (a, b) => fieldsPriority.indexOf(a.key) - fieldsPriority.indexOf(b.key)
  );
  return (
    <div key={i}>
      <Link to={`/${result.language}/${result.baseUrl}/${result.slug}/`}>
        <h2>{result.title}</h2>
      </Link>
      <div>{renderType(result)}</div>
      <div>{splitMatch(match)}</div>
    </div>
  );
};

export default props => {
  const { language } = props.pageContext;
  let { search: pathSearch } = props.location;
  pathSearch = pathSearch || "?";
  const isEn = props.pageContext.language === "en";
  let { edges: allMd } = props.data.md;
  allMd = allMd.map(flatten);
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState(qs.decode(pathSearch.slice(1)).q || "");
  useEffect(() => {
    if (search.length >= 3) setResults(fuse.current.search(search));
  }, []);
  const fuse = useRef(
    new Fuse(allMd, {
      includeMatches: true,
      threshold: 0.3,
      includeScore: true,
      keys: fieldsPriority
    })
  );
  return (
    <div style={{ width: "100%" }}>
      <Helmet>
        <title>{isEn ? "Search" : "Busca"}</title>
        <meta
          name="description"
          content={
            isEn
              ? "Trying to find a project or a blog post? Use our search feature and find any content on our pages"
              : "Não sabe onde achar um projeto ou um post do blog? Use nossa ferramenta de busca para encontrar qualquer conteúdo no site"
          }
        />
        <link
          rel="canonical"
          href={`https://appmasters.io/${language}/${
            isEn ? "search" : "busca"
          }/`}
        />
      </Helmet>
      <Banner title={isEn ? "Search" : "Busca"} />
      <Contact style={{ flexDirection: "column", paddingBottom: 64 }}>
        <div>
          <div>
            <form method=".">
              <div>
                <label htmlFor="q">{isEn ? "Search" : "Busca"}</label>
                <input
                  pattern=".{3,}"
                  required
                  title="3 characters minimum"
                  type="text"
                  name="q"
                  id="q"
                  value={search}
                  onChange={onChange(setSearch)}
                />
              </div>
            </form>
          </div>
        </div>
        {search.length > 0 ? (
          results.length > 0 ? (
            <Content>{results.map(renderResults)}</Content>
          ) : (
            <>
              {isEn ? "No results were found" : "Nenhum resultado encontrado"}
            </>
          )
        ) : null}
      </Contact>
    </div>
  );
};

export const query = graphql`
  query SearchPageQuery($language: String!) {
    md: allMarkdownRemark(
      filter: {
        frontmatter: {
          language: { eq: $language }
          templateKey: { in: ["blog-post", "technology-page", "project-page"] }
        }
      }
    ) {
      edges {
        node {
          html
          fields {
            slug
          }
          frontmatter {
            title
            baseUrl
            clientName
            summary
            description
            clientName
            clientLocation
            language
            templateKey
          }
        }
      }
    }
  }
`;
