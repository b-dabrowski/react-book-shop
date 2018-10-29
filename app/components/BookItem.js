import React from 'react';
import PropTypes from 'prop-types';

export default function BookItem ({book}) {
    const style = {
        content:{            
            height: '200px',
            width: '100%',
            display: 'block'
        }
    }    
    
    const { title, authors, publishedDate, description } = book.volumeInfo;
    const { thumbnail } = book.volumeInfo.imageLinks;
    const { amount } = book.saleInfo.listPrice? book.saleInfo.listPrice : 'Sold out';
    return(
        <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                    <img 
                        src={thumbnail}
                        style={style.content}
                    />
                    <div className="caption">
                        <h3>
                            {title}
                        </h3>
                        <p>
                            {description && description.substr(0,100)}...
                        </p>
                        <p>
                            <b>Price:</b> {amount}
                        </p>
                        <p>
                            Authors: {authors && authors.join(", ")}
                        </p>
                        <p>
                            Published date: {publishedDate}
                        </p>
                        <p>
                            <a href="#" className="btn btn-primary" role="button" disabled>Order</a>
                            <a href="#" className="btn btn-default" role="button" disabled>Add to cart</a>
                        </p>
                    </div>
                </div>
        </div>
    );
}

BookItem.propTypes = {
    book: PropTypes.object.isRequired,    
}

BookItem.defaultProps = {    
    amount: 0,
};