const renderItems = (items, callback) => {
    let elements = []

    if (items.length < 1) {
        return
    }

    if (items.length > 0) {
        for (let i = 0; i < items.length; i++) {
            elements.push(callback(items[i], i, items.length))
        }
    }

    return elements
}

export { renderItems }
