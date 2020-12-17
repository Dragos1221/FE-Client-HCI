import { FormControl, FormControlLabel, FormLabel, RadioGroup, Slider } from '@material-ui/core';
import { Radio } from '@material-ui/core';
import { Card, CardContent, CardHeader, Typography } from '@material-ui/core';
import * as React from 'react';
import { Component } from 'react';

export interface EvaluareProps {
    
}
 
export interface EvaluareState {
    evalList: any;
    valuetext:any;
    marksList:any;
}

const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 1,
      label: '1',
    },
    {
      value: 2,
      label: '2',
    },
    {
      value: 3,
      label: '3',
    },
    {
        value: 4,
        label: '4',
      },
      {
        value: 5,
        label: '5',
      },
      {
        value: 6,
        label: '6',
      },
      {
        value: 7,
        label: '7',
      }, {
        value: 8,
        label: '8',
      }, {
        value: 9,
        label: '9',
      }, {
        value: 10,
        label: '10',
      },
  ];
 
class Evaluare extends React.Component<EvaluareProps, EvaluareState> {
    constructor(props:EvaluareProps)
    {
        super(props);
        this.state={
            evalList:["interesat","exaltat" , "puternic" , "entuziasmat"],
            marksList:["angajabila" , 'placuta' , 'agreabila' , 'onesta'],
            valuetext:0
        }
    }

    cumTesimti =(elem:any,index:number)=>{
        console.log(index)
        return(
            <div>
                 <Typography variant="body2"  component="div">
                 <FormControl component="fieldset">
                        <FormLabel component="label">{""+(index+1)+elem} </FormLabel>
                            <RadioGroup row aria-label="position" name={"position"+index}>
                                <FormControlLabel
                                value="1"
                                control={<Radio color="primary" />}
                                label="Deloc(1)"
                                labelPlacement="start"
                                />
                                <FormControlLabel
                                value="2"
                                control={<Radio color="primary" />}
                                label="2"
                                labelPlacement="start"
                                />
                                <FormControlLabel
                                value="3"
                                control={<Radio color="primary" />}
                                label="3"
                                labelPlacement="start"
                                />
                                <FormControlLabel
                                value="4"
                                control={<Radio color="primary" />}
                                label="4"
                                labelPlacement="start"
                                />
                                <FormControlLabel value="5" control={<Radio color="primary" />} label="Foarte mult(5)"  labelPlacement="start"/>
                            </RadioGroup>
                    </FormControl>
                 </Typography>
            </div>
        )
    }

    slider =(elem:any)=>{
        return (
            <div >
            <Typography id="discrete-slider-custom" gutterBottom>
                {elem}
            </Typography>
            <Slider
                getAriaValueText={this.state.valuetext}
                aria-labelledby="discrete-slider-custom"
                step={1}
                max={10}
                valueLabelDisplay="auto"
                marks={marks}
            />
        </div>
          );
    }

    render() { 
        return (
            <div>
                <Card>
                    <CardHeader
                        title="Evaluare CV"
                    />
                    <Typography>
                        Gândindu-vă la Dvs., în ce măsură vă simţiţi acum: 
                    </Typography>
                    <CardContent>
                        {
                            this.state.evalList.map((elem:any , index:number)=>{
                                return this.cumTesimti(elem,index);
                            })
                        }
                    </CardContent>
                        <Typography>
                            Marcaţi cu un X pe segmentul 0-10, măsura în care consideraţi că fiecare dintre următoarele aspecte este caracteristic persoanei al cărei CV l-aţi studiat anterior: 
                        </Typography>
                    <CardContent>
                   {
                       this.state.marksList.map((elem:any)=>{
                           return this.slider(elem);
                       })
                   }
                    </CardContent>
                </Card>
            </div>
        );
    }
}
 
export default Evaluare;