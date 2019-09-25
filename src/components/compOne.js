import React from 'react';
import 'antd/dist/antd.css';
import { Input, Row, Col, Button } from 'antd';



//Function component One
function CompOne({ value, disabled, sendData, fetchData, handleChange, data, show }) {

    return (
        <div>
            <Row><Col offset={6} span={12} >
                <h4 style={{ textAlign: 'center' }}>Component One</h4>
                <Input
                    onChange={(e) => { handleChange(e.target.value) }}
                    value={value}
                    disabled={disabled} />
                <div style={{ marginTop: 20, display: 'flex' }}>
                    <div style={{ flex: 1, textAlign: 'center' }}>
                        <Button type="primary" onClick={() => { sendData() }}>Send 2 Comp2</Button>
                    </div>
                    <div style={{ flex: 1, textAlign: 'center' }}>
                        <Button type="primary" onClick={() => { fetchData() }}>GET</Button>
                    </div>
                </div>


                {show == 1 && data && <div style={{ marginTop: 20 }}>
                    <p><span style={{ color: 'black', fontWeight: 'bold' }}>Fact: </span>{data.fact}</p>
                    <p><span style={{ color: 'black', fontWeight: 'bold' }}>Length: </span>{data.length}</p>
                </div>}

            </Col>
            </Row>
        </div>
    );
}

export default CompOne;
