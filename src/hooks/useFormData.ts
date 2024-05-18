import { useState } from 'react'
import {IPdfData} from "../Interfaces/IPdfData";
import { useForm } from 'react-hook-form'

export const useFormData = () => {
    const [formData, setFormData] = useState<IPdfData>()
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm<IPdfData>({
        mode: 'onBlur'
    })

    const generatePdfFile = (data: IPdfData) => {
        setFormData(data)
    }

    return { handleSubmit, generatePdfFile, register, errors, formData }
}