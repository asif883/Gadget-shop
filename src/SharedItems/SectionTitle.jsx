
import img1 from '../assets/watch.svg'
const SectionTitle = ({heading}) => {
    return (
        <div className="text-center">
            <h1 className="text-3xl font-bold">{heading}</h1>
            <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, deleniti.</p>
            <div className="flex items-center gap-6 mt-12">
                 <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img className='h-[250px]'
                    src={img1}
                    alt="watch" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                    Apple Watch!
                    <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                    <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                    </div>
                </div>
                 </div>
                 <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img className='h-[250px]'
                    src={img1}
                    alt="watch" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                    Apple Watch!
                    <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                    <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                    </div>
                </div>
                 </div>
                 <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img className='h-[250px]'
                    src={img1}
                    alt="watch" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                    Apple Watch!
                    <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                    <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                    </div>
                </div>
                 </div>
                 <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img className='h-[250px]'
                    src={img1}
                    alt="watch" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                    Apple Watch!
                    <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                    <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                    </div>
                </div>
                 </div>
            </div>
        </div>
    );
};

export default SectionTitle;