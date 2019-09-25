import React from 'react';
import 'antd/dist/antd.css';
import { Input, Row, Col, Button } from 'antd';
//Function component Two
function CompTwo({ value, disabled, handleChange, data, show, handleButton }) {
    return (
        <div>
            <Row><Col offset={6} span={12} >
                <h4 style={{ textAlign: 'center' }}>Component Two</h4>
                <Input value={value} disabled={disabled} onChange={(e) => { handleChange(e.target.value) }} />
                <div style={{ marginTop: 20, display: 'flex' }}>
                    <div style={{ flex: 1, textAlign: 'center' }}>
                        <Button type="primary" onClick={() => { handleButton() }} >Send To Comp1</Button>
                    </div>

                </div>

                {show == 2 && data && <div style={{ marginTop: 20 }}>
                    <p><span style={{ color: 'black', fontWeight: 'bold' }}>Fact: </span>{data.fact}</p>
                    <p><span style={{ color: 'black', fontWeight: 'bold' }}>Length: </span>{data.length}</p>
                </div>}
            </Col>
            </Row>
        </div>
    );
}

export default CompTwo;
