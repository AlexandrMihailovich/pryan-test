export function yearScaleSelect(id) {
    return {
        type: 'YEAR_SCALE',
        id
    };
}

export function monthScaleSelect(id) {
    return {
        type: 'MONTH_SCALE',
        id
    };
}

export function dayScaleSelect(id) {
    return {
        type: 'DAY_SCALE',
        id
    };
}

export function changeScale(select) {
    console.log(select);
    return {
        type: 'CHANGE_SCALE',
        select
    };
}
