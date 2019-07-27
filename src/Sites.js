import React from 'react'

const Sites = ({trends}) => {
    return (
        <div align="center">
            <h1>Sites</h1>
            {trends.map((site) => (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{site.keyword}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{site.url}</h6>
                        <p className="card-text">{site.keyword} - {site.url} </p>
                    </div>
                </div>
            ))}
        </div>

    )
};

export default Sites;