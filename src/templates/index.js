import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Layout, Card, PostCard, Pagination } from '../components/common'
import { MetaData } from '../components/common/meta'
import lauren from "../images/lauren.jpg"
import barny from "../images/barny.jpeg"
import staf from "../images/staf.jpeg"
import dog from "../images/dog.jpeg"

/**
* Main index page (home page)
*
* Loads all posts from Ghost and uses pagination to navigate through them.
* The number of posts that should appear per page can be setup
* in /utils/siteConfig.js under `postsPerPage`.
*
*/
const Index = ({ data, location, pageContext }) => {
    const posts = data.allGhostPost.edges

    return (
        <>
            <MetaData location={location} title="Home" />
            <Layout isHome={true}>
                <div className="container">
                    <h1 class="title">Dog Walking</h1>
                    <p>
                        We provide an excellent dog walking service Monday to Saturday with
                        flexible options to suit you and your dog(s).
                    </p>
                    <p>
                        You can choose either a Solo walk, for those dogs that may not get
                        on well with others, or group walks with up to 4 dogs at a time, you
                        can also choose if you would like 30 minutes or an hour session.
                    </p>
                    <p>Additional dogs can be added at a discount from just £5.</p>
                    <p>
                        You can find all the pricing information <a href="./prices">here</a>.
                    </p>
                    <p>
                        The team are fully DBS checked and qualified in Dog First Aid, so
                        you can be safe in the knowledge your dog will be in safe hands.
                    </p>
                    <h1 class="title">Pet Sitting</h1>
                    <p>
                        If you're going to be away and would like for your pets to be looked
                        after in the comfort of your own home then we're here to help.
                    </p>
                    <p>
                        We know it can be a struggle for both owner and pet and that kennels
                        and catteries can be a daunting choice for your pets and so we
                        strive to keep them safe and comfortable in the safety of their own
                        home.
                    </p>
                    <p>
                        The pets we are trained to look after range from cats and dogs, to
                        reptiles and amphibians and most things in between (no alligators
                        please).
                    </p>
                    <p>
                        Another benefit is peace of mind of your own property, we will
                        ensure that it is locked and secured at all times and that curtains
                        are opened/closed and there's a general presence in the property
                        while you're away.
                    </p>
                    <h1>Testimonials</h1>
                    <main>
                        <ul>
                            <li>
                                <img src={lauren} />
                                <div class="content">
                                    <p>Very lovely kind girl who is professional and trustworthy to take care of all fur baby's, highly recommend!</p>
                                <span class="quote">Leann, Northgate</span>
                                </div>
                            </li>
                            <li>
                                <img src={barny} />
                                <div class="content">
                                    <p>I can recommend this lovely young lady to take care of your dogs or cats. Walking or pet sitting, Good prices for a good service</p>
                                    <span class="quote">Tanya, Pound Hill</span>
                                </div>
                            </li>
                            <li>
                                <img src={dog} />
                                <div class="content">
                                    <p>Lovely lady, very professional, my dogs are normally very nervous around other people but she took the time to sit down ad come over to meet them and now they know who she is and I wouldn't recommend anyone else! Massive 5 star!</p>
                                </div>
                                <span class="quote">Curtis, Maidenbower</span>
                            </li>
                        </ul>         
                    </main>
                    <hr></hr>
                    <h1>Blog Posts</h1>
                    <section className="post-feed">
                        {posts.map(({ node }) => (
                            // The tag below includes the markup for each post - components/common/PostCard.js
                            <PostCard key={node.id} post={node} />
                        ))}
                    </section>
                    <Pagination pageContext={pageContext} />
                </div>
            </Layout>
        </>
    )
}

Index.propTypes = {
    data: PropTypes.shape({
        allGhostPost: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
    pageContext: PropTypes.object,
}

export default Index

// This page query loads all posts sorted descending by published date
// The `limit` and `skip` values are used for pagination
export const pageQuery = graphql`
  query GhostPostQuery($limit: Int!, $skip: Int!) {
    allGhostPost(
        sort: { order: DESC, fields: [published_at] },
        limit: $limit,
        skip: $skip
    ) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
  }
`
