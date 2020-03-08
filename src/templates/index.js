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
                    <h1>Contact Us Now!</h1>
                    <p>If you're interested in keeping your dogs healthy and sociable or would like your beloved moggy to be checked on please contact us!<br/>
                    There's so many ways to get in touch, simply select the option that suits you!</p>
                    {/* <p>Fill out our<Link to="/contact"> contact page here</Link></p>
                    <p>Give us ring on the dog and bone <a href="tel:07849838319">07849838319</a></p>
                    <p>Or you can email <a href="mailto:lauren@crawleydogwalkers.com">lauren@crawleydogwalkers.com</a></p> */}
                    <ul>
                    <li><a className="site-nav-item" href="tel:07849838319"><i class="fa fa-phone"></i> 07849838319</a></li>
                    <li><a className="site-nav-item" href="https://facebook.com"><i class="fa fa-facebook"></i> Facebook</a></li>
                    <li><a className="site-nav-item" href="mailto:lauren@crawleydogwalkers.com"><i class="fa fa-envelope"></i> Email</a></li>
                    </ul>
                    <h1>Testimonials</h1>
                    <h2>Don't just take our word, read what our customers have to say!</h2>
                    <div class="testimonial">
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
                    </div >
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
