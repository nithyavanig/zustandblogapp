import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useCreateBlog } from "./store/createBlog";
import { months } from "./data";
import { redirect, useNavigate } from "react-router-dom";

export const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();
  const saveBlog = useCreateBlog((state) => state.addBlogPost);

  const getFormattedDate = (dateField) => {
    const varDate = new Date(dateField);
    const year = varDate.getFullYear();
    const day = varDate.getDate();
    const monthName = months[varDate.getMonth() + 1];
    return `${monthName}${day}${year}`;
  };

  const handleSave = () => {
    const formattedDate = getFormattedDate(Date.now());
    const newBlog = {
      title: title,
      createdOn: formattedDate,
      createdBy: author,
      content: content,
    };
    saveBlog(newBlog);
    setTimeout(() => {
      navigate("/blogs");
    }, 2000);
  };

  return (
    <div className="blogs">
      <div className="header"></div>
      {/* <div className="blog-header">
        <Button variant="contained">Write your blog</Button>
      </div> */}
      <div className="blog-content">
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          id="outlined-multiline-static"
          label="Content"
          multiline
          rows={10}
          defaultValue="Default Value"
          onChange={(e) => setContent(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Author"
          variant="outlined"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <Button variant="contained" onClick={() => handleSave()}>
          Save
        </Button>
      </div>
      <div className="blog-footer"></div>
    </div>
  );
};
