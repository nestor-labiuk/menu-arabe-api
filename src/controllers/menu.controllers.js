import { isValidObjectId } from "mongoose";
import Menu from "../model/Menu.js";

export const getMenus = async (req, res) => {
  const {limit=100,from=0} = req.query
  const [menus,total] = await Promise.all([

    Menu.find({})
    .skip(Number(from))
    .limit(Number(limit)),
    Menu.count()
  ])
  if(total===0){
    return res.status(404).json ({
      message: "No hay menús",
    })
  }
  if (menus){
    return res.status(200).json ({
      // message: "menús retornados exitosamente",
      // total,
      menus
    })
  }
  
}

export const getMenu = async (req, res) => {
  const {id} = req.params
  if(!isValidObjectId(id)){
    return res.status(404).json({
      message:`Menú: no es valido`
    })
  }
  const menu = await Menu.findById(id)
  if (! menu){
    return res.status(404).json({
      message:`Menú: no existente`
    })
  }
  res.json ({
      // message: `Menú con id ${id},retornado exitosamente`,
      menu }) 

}

export const createMenu = async (req, res) => {
  const {name,state,price,detail,category,image} = req.body
  const isExistName = await Menu.findOne({name})
  if (isExistName){
    return res.status(400).json({
      message:'El nombre del menú ya existe'
    })
  }
  const menu = await Menu({
    name,state,price,detail,category,image
  })
  try {
    await menu.save()
    res.status(201).json ({
      message: `Menu ${name} creado`,
    })
  } catch (error) {
    res.status(400).json({
      message:'Ha ocurrido un error',
      fields:{
        name:error.errors?.name?.message,
        state:error.errors?.state?.message,
        price:error.errors?.price?.message,
        detail:error.errors?.detail?.message,
        category:error.errors?.category?.message,
        image:error.errors?.image?.message,
      },
    })
  }
}

export const editMenu = async (req, res) => {
  const {id} = req.params
  const {name,state,price,detail,category,image} = req.body
  if(!isValidObjectId(id)){
    return res.status(404).json({
      message:`Menú: no es valido para edición`
    })
  }
  const menuById = await Menu.findById(id)
  if (! menuById){
    return res.status(404).json({
      message:`Menú: no existente para edición`
    })
  }

  const menuByName = await Menu.findOne({name})
  if (menuByName && menuById.name !== name){
    return res.status(400).json({
      message:'El nombre del menú ya existe'
    })
  }


  try {
    await Menu.findByIdAndUpdate({_id:id},{name,state,price,detail,category,image} )
    res.status(201).json ({
      message: `Menu ${name} editado`,
    })
  } catch (error) {
    res.status(400).json({
      message:'Ha ocurrido un error',
      fields:{
        name:error.errors?.name?.message,
        state:error.errors?.state?.message,
        price:error.errors?.price?.message,
        detail:error.errors?.detail?.message,
        category:error.errors?.category?.message,
        image:error.errors?.image?.message,
      },
    })
  }

}

export const deleteMenu = async (req, res) => {
  const {id} = req.params
  if(!isValidObjectId(id)){
    return res.status(404).json({
      message:`Menú: no es valido`
    })
  }
  const menu = await Menu.findByIdAndDelete(id)
  if (! menu){
    return res.status(404).json({
      message:`Menú: no existente`
    })
  }
  res.json ({
    message: `Menu: ${menu?.name} eliminado con exito`
    })
}