import {notFound} from "next/navigation"

export default function BlogPost({ params }) {
  if (params.slug === 'foo') {
    notFound()
  }

  return (
    <div>
      Blog Post: {params.slug}
    </div>
  )
}