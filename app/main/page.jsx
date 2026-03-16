"use client";

import React, { useState } from "react";
import Input from "@/components/Input";
import { redirect } from "next/navigation";
import slugify from "slugify"

const Main = () => {
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [form, setForm] = useState({
    name: "",
    image: "",
    links: [{ name: "", url: "" }]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (!name) return;

    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLinkChange = (index, e) => {
    const { name, value } = e.target;

    setForm((prev) => {
      const updatedLinks = [...prev.links];
      updatedLinks[index] = {
        ...updatedLinks[index],
        [name]: value
      };

      return {
        ...prev,
        links: updatedLinks
      };
    });
  };

  const addLink = () => {
    setForm((prev) => ({
      ...prev,
      links: [...prev.links, { name: "", url: "" }]
    }));
  };

  const removeLink = (index) => {
    setForm((prev) => ({
      ...prev,
      links: prev.links.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    try {

      const slug = slugify(form.name, { lower: true, strict: true });

      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...form,
          slug
        })
      });

      const result = await response.json();

      if (!result.success) {
        setError(result.error);
        return;
      }

      setSuccess(true);

      // redirect to the tree page
      window.location.href = `/trees/${slug}`;

    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col gap-4 justify-center items-center bg-gray-50 px-6">

      <h1 className="text-3xl font-bold text-center">
        Create Your Linktree
      </h1>

      {error && (
        <p className="text-red-500 text-sm text-center">
          {error}
        </p>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-xl p-10 w-full max-w-xl flex flex-col gap-4"
      >

        <div className="flex flex-col w-full">
          <label className="text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="flex flex-col w-full">
          <label className="text-sm font-medium">
            Image
          </label>
          <input
            type="text"
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="h-0.5 bg-gray-300 w-full"></div>

        {form.links.map((link, index) => (
          <div key={index} className="flex flex-col gap-2">

            <Input
              value={link}
              onChange={(e) => handleLinkChange(index, e)}
            />

            {form.links.length > 1 && (
              <button
                type="button"
                onClick={() => removeLink(index)}
                className="text-red-500 text-sm self-end hover:underline"
              >
                Remove
              </button>
            )}

          </div>
        ))}

        <div className="flex gap-2 items-center mt-2">

          <button
            type="submit"
            className="bg-blue-600 w-full text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>

          <button
            type="button"
            onClick={addLink}
            className="bg-blue-600 px-3 py-2 rounded-md text-white hover:bg-blue-700 transition flex items-center justify-center"
          >
            <span className="material-symbols-outlined">
              add
            </span>
          </button>

        </div>

      </form>

    </div>
  );
};

export default Main;