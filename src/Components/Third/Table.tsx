import './prob3.css';
import React from 'react';
interface Iprops {
    newData: {
        id: number;
        word: string;
        count: number;
        isEnglish: string;
    }[]
}
const sortTypes = {
    up: {
        class: 'arrow-down-circle',
        fn: (a: { count: number; }, b: { count: number; }) => a.count - b.count
    },
    down: {
        class: 'arrow-up-circle',
        fn: (a: { count: number; }, b: { count: number; }) => b.count - a.count
    },
    default: {
        class: 'filter',
        fn: (a: any, b: any) => a
    }
};
const ProductTable = (props: Iprops) => {
    const [currentSort, setcurrentSort] = React.useState('default');
    // method called every time the sort button is clicked
    // it will change the currentSort value to the next one
    const onSortChange = () => {
        let nextSort = '';
        if (currentSort === 'down') nextSort = 'up';
        else if (currentSort === 'up') nextSort = 'default';
        else if (currentSort === 'default') nextSort = 'down';
        setcurrentSort(nextSort);
    };
    const { newData } = props;
    return (
        <div className="table-responsive" style={{ height: '350px', overflow: 'auto' }}>
            <table className='table table-striped'>
                <caption>Our products</caption>
                <thead  style={{position: 'sticky',top: '0',background: 'aliceblue'}} >
                    <tr>
                        <th scope="col">
                            Word
                        </th>
                        <th scope="col">
                            <div style={{display: 'inline-flex'}}>
                                <div className='col-10' style={{marginTop: '10px'}}>Count</div>
                                <div className='col-2'><button
                                    onClick={onSortChange}
                                    className='btn btn-outline-info'>
                                    <i className={`bi bi-${sortTypes[currentSort as keyof typeof sortTypes].class}`} />
                                </button></div>   
                            </div>

                        </th>
                        <th>
                            Is English
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {newData.sort(sortTypes[currentSort as keyof typeof sortTypes].fn).map((item) => (
                        <tr key={item.id}>
                            <td>{item.word}</td>
                            <td>{item.count}</td>
                            <td>{item.isEnglish}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default ProductTable