import React, { useEffect, useState } from 'react';
import DataGrid, {
    Column,
    Grouping,
    GroupPanel,
    Sorting,
    Selection,
    Pager,
    Paging,
    SearchPanel,
} from 'devextreme-react/data-grid';
import Grid from '@mui/material/Grid';
import { Item } from './Item';
import axios from 'axios';

const pageSizes = [10, 25, 50, 100];

const TestGrid = () => {
    const [dataSource, setDataSource] = useState([]);

    const getDataSource = () => {
        axios
            .post(
                process.env.REACT_APP_RESOURCE_URI + '/page1/table?useYn=true',
                null
            )
            .then((response) => {
                console.log('데이터 받아옴. 받은데이터:');
                console.log(response.data);
                setDataSource(response.data);
            })
            .catch((error) => {
                alert('axios:get 실패');
                console.log(error);
            })
            .then(() => {
                console.log('axios 완료.');
            });
    };

    // 유저 등록
    const [userid, setUserid] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const regiUser = () => {
        axios
            .post(process.env.REACT_APP_RESOURCE_URI + '/page1/regi', {
                id: userid,
                name: username,
                pw: password,
            })
            .then((response) => {
                alert("'" + username + "'님의 정보가 등록 되었습니다.");

                setUserid('');
                setUsername('');
                setPassword('');
                getDataSource();
            })
            .catch((error) => {
                alert('등록 오류.');
            });
    };

    const updaUser = () => {};

    const deleUser = () => {};

    // 처음 랜더링 될때 가져오는것
    useEffect(() => {
        getDataSource();
    }, []);

    return (
        <div>
            <button onClick={getDataSource}>조회</button>
            <button onClick={regiUser}>등록</button>
            <button onClick={updaUser}>수정</button>
            <button onClick={deleUser}>삭제</button>
            <div>
                <input
                    name='id'
                    placeholder='아이디'
                    type={'text'}
                    value={userid}
                    onChange={(event) => {
                        setUserid(event.target.value);
                    }}
                />
                <input
                    name='name'
                    placeholder='이름'
                    type={'text'}
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
                <input
                    name='pw'
                    placeholder='비밀번호'
                    type={'password'}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button type={'button'} onClick={regiUser}>
                    전송
                </button>
                <div>사용가능</div>
            </div>
            <Grid container spacing={2} sx={{ marginTop: '10px' }}>
                <Grid item xs={12}>
                    <Item sx={{ height: '735px' }} variant='outlined'>
                        <DataGrid
                            dataSource={dataSource}
                            allowColumnReordering={true}
                            allowColumnResizing={true}
                            columnAutoWidth={true}
                            showColumnLines={true}
                            showRowLines={true}
                            showBorders={true}
                            rowAlternationEnabled={true}
                        >
                            <Sorting mode='single' />
                            <Selection
                                mode={'multiple'}
                                selectAllMode='page'
                                showCheckBoxesMode='always'
                            />
                            <SearchPanel
                                visible={true}
                                highlightCaseSensitive={true}
                            />
                            <Column
                                dataField='useYn'
                                caption='상태'
                                dataType='string'
                                alignment={'center'}
                                width={'80px'}
                            />
                            <Column
                                dataField='id'
                                caption='사용자 아이디'
                                dataType='string'
                                // alignment='right'
                            />
                            <Column
                                dataField='name'
                                caption='사용자 이름'
                                dataType='string'
                            />
                            <Column
                                dataField='pw'
                                caption='비밀번호'
                                dataType='string'
                            />
                            <Column
                                dataField='regiDt'
                                caption='등록일'
                                dataType='string'
                            />
                            <Column
                                dataField='regiUser'
                                caption='등록자'
                                dataType='string'
                            />
                            <Column
                                dataField='updaDt'
                                caption='수정일'
                                dataType='date'
                            />
                            <Column
                                dataField='updaUser'
                                caption='수정자'
                                dataType='string'
                            />
                            {/* <Column dataField='Customer' dataType='string' width={150} /> */}

                            <Pager
                                allowedPageSizes={pageSizes}
                                showPageSizeSelector={true}
                            />
                            <Paging defaultPageSize={10} />
                        </DataGrid>
                    </Item>
                </Grid>
            </Grid>
        </div>
    );
};

export default TestGrid;
