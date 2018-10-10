export default (tierList, { text }) => {
    return tierList.filter((tierList) => {
        const textMatch = tierList.title.toLowerCase().includes(text.toLowerCase())
        return textMatch
    });
}