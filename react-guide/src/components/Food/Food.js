const Card = ({ title, slug }) => (
    <div className="card">
        <h2>{title}</h2>
        <button className="button" onClick={() => purchase(slug)}>
            Buy Item
        </button>
    </div>
);

const Products = ({ items }) => (
    <div className="products">
        {
            items.map(
                ({ title, slug}) => (
                    <Card key={slug} title={title} slug={slug}/>
                )
            )
        }
    </div>
);

export default function Food() {
    const items = [
        {title: "Cat Food", slug: "cat-food"},
        {title: "Dog Food", slug: "dog-food"},
        {title: "Waffles", slug: "waffles"}
    ];

    return (
        <div className="food">
            <h1>Shop</h1>
            <Products items={items}/>
        </div>
    );
}

function purchase(slug){
    console.log(slug);
}