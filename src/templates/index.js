import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Layout, Card, PostCard, Pagination } from '../components/common'
import { MetaData } from '../components/common/meta'
import lauren from "../images/lauren.jpg"

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
            <MetaData location={location} />
            <Layout isHome={true}>
                <div className="container">
                    <h1>About Us</h1>
                    <h2>Hi, I'm Lauren the owner of Crawley Dog Walkers.</h2>
                    <p>
                    I am offering a dog walking and pet sitting service in Crawley and
                    the surrounding areas. I am a caring and passionate person and
                    would like to think that this is reflected in the high level of
                    service that I offer.
                    </p>
                    <p>
                    I created this service because I am passionate about animals
                    (especially dogs!) and would like to help owners make a positive
                    impact on their pet's happiness, health and exercise needs.
                    </p>
                    <p>
                    To read more about me and for more information about the services
                    I offer please have a look around my website or check out my
                    <a href="https://www.facebook.com/Crawleydogwalk/" target="_blank"
                        >Facebook
                        <b-icon
                        pack="fab"
                        size="is-small"
                        icon="facebook-square"
                        ></b-icon
                    ></a>
                    and
                    <a
                        href="https://www.instagram.com/crawleydogwalking/"
                        target="_blank"
                        >Instagram <b-icon pack="fab" icon="instagram"></b-icon
                    ></a>
                    accounts.
                    </p>

                    <section className="post-feed">
                    <Card image={lauren} title="Lauren" body="lorem ipsum delds dkjfns ewdsjfn asjnd"/>
                    </section>

                    <h2 class="title">Arrange a Meeting!</h2>
                    <h1 class="title">Dog Walking</h1>
                    <p>
                        We provide an excellent dog walking service Monday to Saturday with
                        flexible options to suit you and your dog(s).
                    </p>
                    <p>
                        You can choose either a Solo walk, for those dogs that may not get
                        on well with others, or group walks with up to 4 dogs at a time, you
                        can also choose if you would like 40 minutes or an hour session.
                    </p>
                    <p>Additional dogs can be added at a discount from just £5.</p>
                    <p>
                        You can find all the pricing information
                        <a href="./prices">here</a>.
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
                    <hr></hr>
                    <h1>Blog Post</h1>
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
