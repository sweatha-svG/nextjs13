//////final
import React from 'react'
import Link from 'next/link'

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-x-full flex-start flex-col">
      <h1 className="head_text text_left">
        <span className="blue_gradient">{type} Post</span>
      </h1>

      <p className="desc text-left max-w-md">
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform
      </p>

      <form
        onSubmit={handleSubmit} // Make sure form submit triggers handleSubmit
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorpism"
      >
        <label>
          <span className="font-semibold text-base text-gray-700">Your AI prompt</span>
        </label>
        <textarea
          value={post.prompt}
          onChange={(e) =>
            setPost({
              ...post,
              prompt: e.target.value,
            })
          }
          placeholder="Write your prompt here"
          className="form_textarea"
        />

        <label>
          <span className="font-semibold text-base text-gray-700">
            Tag{' '}
            <span>
              (#product, #webdevelopment, #idea)
            </span>
          </span>
        </label>
        <input
          value={post.tag}
          onChange={(e) =>
            setPost({
              ...post,
              tag: e.target.value,
            })
          }
          placeholder="#tag"
          className="form_textarea"
        />

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm ml-5 rounded-full text-black bg-orange-500"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  )
}

export default Form


