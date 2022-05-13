function MainTitle({tag, text}) {
    const Tag = tag || "h1";
    return <Tag>{text}</Tag>;
}

export default MainTitle;


// const MainTitle = ({tag, text}) => {
//     const Tag = tag || "h1";
//     return <Tag>{text}</Tag>;
// }
//
// export default MainTitle;

