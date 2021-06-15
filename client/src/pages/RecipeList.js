import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";
import StarRating from './StarRating'

function RecipeList({ checklist, onUpdatedChecklist, onDeleteChecklist}) {
  const { id, title, instructions, due_date, rating } = checklist;

  function handleUpdateRating(pct) {
    const newRating = pct * 5;

    console.log(rating)
    fetch(`/checklists/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ rating: newRating }),
    })
      .then((r) => r.json())
      .then(onUpdatedChecklist);
  }

  function handleDeleteSpice(id) {
    fetch(`/checklists/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        onDeleteChecklist(checklist);
      }
    });
  }
  return (
    <div>
    <Wrapper> 
          <Checklist key={checklist.id}>
            <Box>
              <h2>{title}</h2>
              <p>
                <em>Due Date:{due_date}</em>
                &nbsp;·&nbsp;
                <cite>By {checklist.user.username}</cite>
              </p>
              <ReactMarkdown>{instructions}</ReactMarkdown>
              <div>
             Rating:{" "}
             <StarRating percentage={rating / 5} onClick={handleUpdateRating} />
              </div>
              <button style={{backgroundColor: "rgb(212,175,55)", color: "White", border: "none", padding: "5px"}} onClick={() => handleDeleteSpice(checklist.id)} >Delete</button>
            </Box>
          </Checklist>
    </Wrapper>
      </div>
  );
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

const Checklist = styled.article`
  margin-bottom: 24px;
`;

export default RecipeList;
