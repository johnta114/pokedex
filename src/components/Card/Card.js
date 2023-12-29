import React from 'react'
import "./Card.css"


export const Card = ({ pokemon }) => {
  return (
    <div className="w-80 shadow-sm bg-white rounded-3xl p-3">
      <div className='flex justify-center'>
        <img  src={pokemon.sprites.front_default
} alt="ポケモンの正面画像" />
      </div>
      <h3 className='p-0 text-2xl mb-3 mt-0'>{pokemon.name}</h3>
      <div className="cardTypes">
        <div>タイプ</div>
        {pokemon.types.map((type) => {
          return (
          <div key={type.type.name}>
            <span className='typeName'>{type.type.name}</span>
          </div>
          );
        })}
      </div>
      <div className="text-center">
        <div className="cardData">
          <p className='title'>重さ：{pokemon.weight}</p>
        </div>
        <div className="cardData">
          <p className='title'>高さ：{pokemon.height}</p>
        </div>
        <div className="cardData">
          <p className='title'>アビリティ：{pokemon.abilities[0].ability.name}</p>
        </div>
      </div>
    </div>

  )
};

export default Card;
