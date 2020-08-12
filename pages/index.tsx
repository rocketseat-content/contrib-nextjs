import Head from 'next/head'
import {Container, TitleContainer} from '../styles/Home'
import {RocketLogo} from '../assets/images/logo'
import Link from 'next/link'

import { fetchAPI } from '../lib/api-prismic';

interface Post {
  node: {
    _meta: {
      uid: string;
    }
    title: string;
    thumbnail: {
      url: string;
    };
    content: string;
  }
}

interface HomeProps {
  posts: Post[];
}

export default function Home({ posts }: HomeProps) {
  return (
    <Container>
      <Head>
        <title>Rocketseat | Blog Next.JS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TitleContainer>
        
      </TitleContainer>

     <ul>
       {posts?.map(({ node }) => (
         <li key={`post-${node._meta.uid}`}>
            <Link href={`posts/${node._meta.uid}`}>
              <a>
                <img width="100" src={node.thumbnail.url} />
                {node.title}
              </a>
            </Link>
         </li>
       ))}
     </ul>
    </Container>
  )
}

export async function getServerSideProps() {
  const posts = await fetchAPI(`
    query {
      allPosts {
        edges {
          node{
            _meta {
              uid
            }
            title
            thumbnail
            content
          }
        }
      }
    }
  `, {});

  return {
    props: {
      posts: posts.allPosts.edges,
    }
  }
}

