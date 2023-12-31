import parseISO from "date-fns/parseISO";
import format from "date-fns/format";

export const constructQueryString = (values) => {
    let queryString = "";
    Object.entries(values).map(([k, v]) => {
        if (
            (Array.isArray(v) && v.length > 0) ||
            (!Array.isArray(v) && v !== "")
        ) {
            if (k !== "page") {
                if (Array.isArray(v)) {
                    queryString += `&${k}=[${v}]`;
                } else {
                    queryString += `&${k}=${v}`;
                }
            }
        }
    });
    return queryString;
};

export const truncate = (n, len) => {
    var newText = n;
    if (n.length > len) {
        newText = n.slice(0, len).concat("...");
    }
    return newText;
};

export const formatDate = (date, type = "dd/MM/yyyy") => {
    return format(parseISO(date), type);
};



