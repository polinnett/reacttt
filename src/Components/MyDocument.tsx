import { Document, Page, Text, View, Image } from '@react-pdf/renderer'
import { FC } from 'react'
import {IPdfData} from "../Interfaces/IPdfData";

const MyDocument: FC<IPdfData> = ({ name, picture }) => {
    return (
        <>
            <Document>
                <Page size='A4' wrap>
                    <View>
                        <Text>Title</Text>
                    </View>
                    <View>
                        <Text>{name}</Text>
                    </View>
                    <View>
                        {picture && <Image source={picture} />}
                    </View>
                </Page>
            </Document>
        </>
    )
}

export default MyDocument