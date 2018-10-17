export default (tierLists, text) => {
    return tierLists.filter((tierList) => {
        const textMatch = tierList.title.toLowerCase().includes(text.toLowerCase())
        return textMatch;
    });
}