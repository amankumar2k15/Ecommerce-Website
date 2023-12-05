import React from 'react'
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
    const [state, handleSubmit] = useForm("xknlpdeo");
    if (state.succeeded) {
        return <p className='font-bolder text-red-600 text-2xl py-2'>Your message has been successfully submitted! We'll respond as soon as possible.</p>;
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1 className="font-titleFont font-semibold text-3xl">
                Fill up a Form
            </h1>
            <div className="md:w-[500px] h-auto py-6 flex flex-col gap-6">
                <div>
                    <p className="text-base font-titleFont font-semibold px-2">Name</p>
                    <input className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
                        type="text" placeholder="Enter your name here" required name="naam" />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <div>
                    <p className="text-base font-titleFont font-semibold px-2">Email</p>
                    <input className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
                        type="email" placeholder="Enter your name here" required name="email" />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <div>
                    <p className="text-base font-titleFont font-semibold px-2">Messages</p>
                    <textarea cols="30" rows="3" className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor resize-none"
                        type="text" placeholder="Enter your name here" required name="textarea">
                    </textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors} />

                </div>
                <button className="w-44 bg-primeColor text-gray-200 h-10 font-titleFont text-base tracking-wide font-semibold hover:bg-black hover:text-white duration-200"
                    type="submit" disabled={state.submitting}>
                    Post
                </button>
            </div>
        </form>
    )
}

export default ContactForm