import { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { Button, Error, FormField, Input, Label, Textarea } from "../styles";

function NewRecipe({ user }) {
  const [title, setTitle] = useState("Get Dress Sized...");
  const [minutesToComplete, setMinutesToComplete] = useState("June 8th");
  const [instructions, setInstructions] = useState(`Dress location: 
  
## Address

3790 Broadway Ave, New York, NY 
76462

## Instructions

**Alteration** needs to be sized for the length(take 3 inch off the bottom) and around the waist
  `);
  const [rating, setRating] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/checklists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        instructions,
        due_date: minutesToComplete,
        rating
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        history.push("/recipe");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <Wrapper>
      <WrapperChild>
        <h2>Create Checklist</h2>
        <form onSubmit={handleSubmit}>
          <FormField>
            <Label htmlFor="title">Title</Label>
            <Input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="minutesToComplete">Due Date</Label>
            <Input
              type="text"
              id="minutesToComplete"
              value={minutesToComplete}
              onChange={(e) => setMinutesToComplete(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="instructions">Instructions/Add'l Notes</Label>
            <Textarea
              id="instructions"
              rows="10"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
            />
            <Label htmlFor="rating">Urgency Rating: (1 = not urgent, 5 = super urgent) </Label>
             <Input
          type="number"
          id="rating"
          max="5"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
          </FormField>
          <FormField>
            <Button style={{backgroundColor: "rgb(212,175,55)"}} type="submit">
              {isLoading ? "Loading..." : "Submit Checklist"}
            </Button>
          </FormField>
          <FormField>
            {errors.map((err) => (
              <Error key={err}>{err}</Error>
            ))}
          </FormField>
        </form>
      </WrapperChild>
      <WrapperChild>
        <h1>{title}</h1>
        <p>
          <em>Due Date: {minutesToComplete}</em>
          &nbsp;·&nbsp;
          <cite>By {user.username}</cite>
        </p>
        <ReactMarkdown>{instructions}</ReactMarkdown>
      </WrapperChild>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 1000px;
  margin: 40px auto;
  padding: 16px;
  display: flex;
  gap: 24px;
`;

const WrapperChild = styled.div`
  flex: 1;
`;

export default NewRecipe;
