import { PDFDownloadLink } from '@react-pdf/renderer'
import {useFormData} from "../../hooks/useFormData";
import MyDocument from "../MyDocument";

const PdfForm = () => {
    const { handleSubmit, generatePdfFile, register, errors, formData } =
        useFormData()
    return (
        <>
            <form onSubmit={handleSubmit(generatePdfFile)}>
                <input
                    data-testid={'input-update'}
                    placeholder={'Введите ваше имя'}
                    alt={'test'}
                    {...register('name', {
                        required: 'Поле обязательно для заполнения!',
                        minLength: {
                            value: 5,
                            message: 'Нужно больше символов'
                        }
                    })}
                />
                    <input
                    placeholder={'Введите ваш email'}
                    alt={'email'}
                    {...register("email", {
                        required: "Обязательно к заполнению",
                        pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        minLength: {
                          value: 10,
                          message: "Введите почту форма example@site.ru",
                        },
                      })}
                />
                <input
                    type='file'
                    accept='image/*'
                    {...register('picture', {
                        required: 'Загрузите картинку!'
                    })}
                />
                {errors && <div>{errors?.name?.message}</div>}
                <button type='submit'>Сохранить</button>
            </form>
            {formData && (
                <PDFDownloadLink
                    document={
                        <MyDocument name={formData.name} picture={formData.picture} />
                    }
                    fileName={`${formData.name}.pdf`}
                >
                    {({loading}) =>
                        loading ? 'Загрузка...' : 'Скачать'
                    }
                </PDFDownloadLink>
            )}
        </>
    )
}

export default PdfForm