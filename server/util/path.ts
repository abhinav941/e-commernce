import path from 'path';

export default (pathName: string) => {
    return path.join(__dirname + '/../' + pathName);
};
