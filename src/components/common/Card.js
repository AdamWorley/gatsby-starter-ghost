import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Card = ({ image, title, body  }) => {
    return (
        <Link to={"/"} className="post-card">
            <header className="post-card-header">
                {image &&
                    <div className="post-card-image" style={{
                        backgroundImage: `url(${image})` ,
                    }}></div>}
                <h2 className="post-card-title">{title}</h2>
            </header>
            <section className="post-card-excerpt">{body}</section>
            <footer className="post-card-footer">
                <div className="post-card-footer-left">
                    <span>something</span>
                </div>
            </footer>
        </Link>
    )
}

Card.propTypes = {
    image: PropTypes.img,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired

    // post: PropTypes.shape({
    //     slug: PropTypes.string.isRequired,
    //     title: PropTypes.string.isRequired,
    //     feature_image: PropTypes.string,
    //     featured: PropTypes.bool,
    //     tags: PropTypes.arrayOf(
    //         PropTypes.shape({
    //             name: PropTypes.string,
    //         })
    //     ),
    //     excerpt: PropTypes.string.isRequired,
    //     primary_author: PropTypes.shape({
    //         name: PropTypes.string.isRequired,
    //         profile_image: PropTypes.string,
    //     }).isRequired,
    // }).isRequired,
}

export default Card
