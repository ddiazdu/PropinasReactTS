import { menuItem } from "../types"

type MenuItemProps = {

    item: menuItem
    addItem: (item: menuItem) => void
    //Función que no devuelve nada

}


const MenuItem = ({ item, addItem }: MenuItemProps) => {
    return (
        <>
            <button className="border-2 rounded-lg border-teal-400 w-full hover:bg-teal-200 p-3 flex justify-between"
                onClick={() => addItem(item)}
            >
                <p>{item.name}</p>
                <p className="font-black">${item.price}</p>
            </button>

        </>
    )
}

export default MenuItem