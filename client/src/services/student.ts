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

export function newSudent(data: IStudent, oldData: IStudent[], studentData: (data: IStudent) => void) {
    const id = parseInt(oldData[oldData.length - 1].id as string) + 1;
    data.id = id.toString()
    studentData(data)

}