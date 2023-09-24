import "./DisplayLists.css";

const DisplayList = () => {
    const list = [
        {
            id: '1',
            content: 'JS Training'
        },
        {
            id: '2',
            content: 'React Training'
        },  {
            id: '3',
            content: 'JS Training'
        },
        {
            id: '4',
            content: 'React Training'
        }
    ];

    return list.map((element, index) => <p key={index}>{element.content}</p>);
};

export default DisplayList;