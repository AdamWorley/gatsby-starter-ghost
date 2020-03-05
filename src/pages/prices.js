import React from 'react'
import { Layout } from '../components/common'

const Prices = () => (
    <Layout>
        <p className="container">
            <article className="content" >
                <h1 className="content-title">Prices</h1>
                <h2 class="subtitle">All prices include insurance</h2>
                <br />
                <h1 class="title">Dog Walking</h1>
                <p>
                    With prices that won't leave you howling having your dog walked couldn't
                    be easier, simply book in a slot that fits your needs! <br />
                    For the group walks, your dog will only be walked with up to 3 other
                    dogs.
                </p>
                <br />
                <h1 class="title">Pet Sitting</h1>
                <p>
                    From Alsatians to Zebrafish, we can sit for most animals. For an
                    overnight stay an hours dog walk is included in the price, we have found
                    the fish aren't as keen though.
                </p>
            </article>
        </p>
    </Layout>
)

export default Prices
