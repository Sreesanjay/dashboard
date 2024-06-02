import { IFilter, IStudent } from "../types";

export function getStudentList(page: number, entries: number, searchData: IFilter, studentData: IStudent[]): IStudent[] {
    for (const key in searchData) {
        if (searchData[key] === '') {
            delete searchData[key];
        }
    }
    const data = studentData.filter((student) => {
        return Object.keys(searchData).every(key => {
            return (student as IFilter)[key].toLowerCase().includes(searchData[key].toLowerCase());
        });
    });

    const startIndex = (page - 1) * entries;
    const endIndex = startIndex + entries;
    const paginatedData = data.slice(startIndex, endIndex);
    return paginatedData;
}