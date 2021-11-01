import React from 'react'
import { View,Text} from 'react-native'

// import { BarChart, Grid } from 'react-native-svg-charts'

import PureChart from 'react-native-pure-chart';
import styles from './Style'

const barchart=()=> {

    const fill = 'rgb(134, 65, 244)'
    const data = [50, 10, 40, 95, -4, -24, null, 85, undefined, 0, 35, 53, -53, 24, 50, -20, -80]

    let sampleData = [
        {x: '1-HTML', y: 10},
        {x: '2-JAVA', y: 16},
        {x: '3-JavaScript', y: 20},
        {x: '4-MY-SQL', y: 18},
        {x: '5-Python', y: 16}
    ]
    return (
        <View style={styles.container}>

            <View style={{marginTop:20,alignItems:'center'}}>
                <Text style={styles.header}> Comparative Chart</Text>
            </View>

            <View style={{marginVertical:20,marginHorizontal:20}}>
                <Text style={styles.text1}>Name : Prakash </Text>
                <Text style={styles.text1}>First Test Date : 20/09/2021 </Text>
                <Text style={styles.text1}>Recent Test Date : 25/10/2021 </Text>
            </View>

            <View>
                {/* <BarChart style={{ height: 200 }} data={data} svg={{ fill }} contentInset={{ top: 30, bottom: 30 }}>
                    <Grid />
                </BarChart> */}

                <PureChart 
                    
                    data={sampleData}
                    color="#000"
                    width={"80%"}
                    defaultColumnWidth={30}
                    height={230}
                    marginRight={"10%"}
                    showEvenNumberXaxisLabel={false}
                    backgroundColor="#fff"
                    xAxisColor={"#000"}
                    yAxisColor={"#000"}
                    xAxisGridLineColor={"#ccc"}
                    yAxisGridLineColor={"#ccc"}
                    labelColor={"#000"}
                    type="bar"
                    size={20}
                    numberOfYAxisGuideLine={10}
                    color={'yellow'}
                 />
            </View>


        </View>
    )
}

export default barchart
