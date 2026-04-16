export default function InvertedServiceCard({title, description, img}) {
    return (
        <>
            <div className="service-card-wrapper">
                <div className="inv-service-img" style={{backgroundImage: `url(${img})`}}>
                </div>
                <div className="inv-service-text">
                    <h3>
                        {title}
                    </h3>
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </>
    )
}