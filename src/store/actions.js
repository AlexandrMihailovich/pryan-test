export function dataIsLoading(bool) {
    return {
        type: 'DATA_IS_LOADING',
        isLoading: bool
    };
}

export function dataHasErrored(bool) {
    return {
        type: 'DATA_HAS_ERROR',
        hasError: bool
    };
}

export function btcFetchDataSuccess(data) {
    return {
        type: 'BTC_FETCH_DATA_SUCCESS',
        data
    };
}



export function changeScale(select) {
    return {
        type: 'CHANGE_SCALE',
        select
    };
}

export function fetchScale(scale) {

    return (dispatch) => {
        dispatch(dataIsLoading(true));
        dispatch(changeScale(scale));
        let url = "btc-"+scale+".json";
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    dispatch(dataHasErrored(true));
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then((data) => {
                dispatch(btcFetchDataSuccess(data));
                dispatch(dataIsLoading(false));
            })
            .catch(() => dispatch(dataHasErrored(true)));
    };
}
