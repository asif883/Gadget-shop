

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center my-10">
            <h1 className="text-3xl font-bold">{heading}</h1>
            <p className="text-gray-500">{subHeading}</p>
            
        </div>
    );
};

export default SectionTitle;