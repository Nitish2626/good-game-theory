export const Section = (props) => {
    return (
        <section className="w-full bg-slate-300 rounded-md px-6 mb-2">

            <h1 className="text-xl font-semibold text-blue-800">{props.text}</h1>
            <ul className="list-disc">
                {props.children}
            </ul>

        </section>
    );
};