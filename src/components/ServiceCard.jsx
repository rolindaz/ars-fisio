export default function ServiceCard({title, description, img}) {
    return (
        <>
            <div className="service-card-wrapper">
                <div className="service-text">
                    <h3>
                        {title}
                    </h3>
                    <p>
                        {description}
                    </p>
                </div>
                <div className="service-img">
                    <img src={img} alt="" />
                </div>
            </div>
        </>
    )
}