import { Document, Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer'
import { FC } from 'react'
import {IPdfData} from "../Interfaces/IPdfData";

const styles = StyleSheet.create({
    document: {margin: '0 auto', display: 'flex', flexDirection: 'column'},
    page: { backgroundColor: 'tomato', margin: 'auto' },
    view: {width: 300},
    text: {textAlign: 'justify'},
    image: {width: 300}
  });

const MyDocument: FC<IPdfData> = ({ name, picture }) => {
    return (
        <>
            <Document style={styles.document}>
                <Page style={styles.page} size='A4' wrap>
                    <View style={styles.view}>
                        <Text style={styles.text}>Title</Text>
                    </View>
                    <View style={styles.view}>
                        <Text style={styles.text}>{name}</Text>
                    </View>
                    <View style={styles.view}>
                        {picture && <Image style={styles.image} source={picture[0]} />}
                    </View>
                </Page>
            </Document>
        </>
    )
}

export default MyDocument