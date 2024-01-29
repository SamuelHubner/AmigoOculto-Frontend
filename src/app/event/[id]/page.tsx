type Props = { params: { id: string; }; };

const Page = ({ params }: Props) => {
    return (
        <div>
            <h1>Event {params.id}</h1>
        </div>
    );
}

export default Page;