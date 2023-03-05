export const pluck = (els, field) => {
    return els.map(el => el[field]);
}

// pluck([{name: 'foo'}], 'name');
// ['foo']