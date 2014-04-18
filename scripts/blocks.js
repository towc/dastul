define(function(){
    var Blocks={
        standard:function(x, y, id){
            this.x=x;
            this.y=y;
            this.id=id;
            this.breakPhase=0;
        },
        ids:['air', 'rock', 'grass', 'dirt', 'flower', 'coalOre', 'ironOre', 'sapling', 'trunk', 'leaf', 'water'],
        ores:['coalOre', 'ironOre'],
        oresByChance:[],
        nature:['flower', 'sapling'],
        natureByChance:[],
        liquids:['water'],
        is:function(cells, x, y, id){
            if(cells[x]) if(cells[x][y]) return cells[x][y].id===id
        },
        air:{
            id:0,
            friction:0.01,
            hardness:1,
            breakable:false,
            solid:false,
            gettable:5
        },
        rock:{
            id:1,
            friction:0.04,
            hardness:5,
            breakable:true,
            solid:true,
            gettable:3
        },
        grass:{
            id:2,
            friction:0.06,
            hardness:2,
            breakable:true,
            solid:true,
            gettable:2
        },
        dirt:{
            id:3,
            friction:0.08,
            hardness:3,
            breakable:true,
            solid:true,
            gettable:2
        },
        flower:{
            id:4,
            chance:0.70,
            friction:0.01,
            hardness:1,
            breakable:true,
            solid:false,
            gettable:1
        },
        coalOre:{
            id:5,
            chance:1,
            friction:0.75,
            hardness:6,
            breakable:true,
            solid:true,
            gettable:3
        },
        ironOre:{
            id:6,
            chance:0.25,
            friction:0.05,
            hardness:7,
            breakable:true,
            solid:true,
            gettable:4
        },
        sapling:{
            id:7,
            chance:0.20,
            friction:0.02,
            hardness:2,
            breakable:true,
            solid:false,
            gettable:2
        },
        trunk:{
            id:8,
            friction:0.3,
            hardness:6,
            breakable:true,
            solid:false,
            gettable:2
        },
        leaf:{
            id:9,
            friction:0.6,
            hardness:3,
            breakable:true,
            solid:false,
            gettable:1
        },
        water:{
            id:10,
            friction:0.5,
            hardness:1,
            breakable:true,
            solid:false,
            gettable:5
        }
    };
    for(var i=0; i<Blocks.ores.length; ++i){
        for(var j=0; j<Blocks[Blocks.ores[i]].chance; j+=0.01){
            Blocks.oresByChance.push(Blocks.ores[i]);
        }
    }
    for(var i=0; i<Blocks.nature.length; ++i){
        for(var j=0; j<Blocks[Blocks.nature[i]].chance; j+=0.01){
            Blocks.natureByChance.push(Blocks.nature[i]);
        }
    }
    Blocks.standard.prototype.draw=function(drawer){
        drawer.drawBlock(this);
    };
    for(var block=0; block<Blocks.ids.length; ++block){
        var type=Blocks.ids[block];
        Blocks[type].sprite=new Image();
        Blocks[type].gen=function(block){
            return function(x, y){
                Blocks.standard.call(this, x, y, block)
            }
        }(block);
        Blocks[type].sprite.src=//'/matei/games/dastul/game/sprites/blocks/'+type+'.png';
        'C:/Users/Matei/Desktop/copot.eu_matei/online/games/dastul/game/sprites/blocks/'+type+'.png';
        Blocks[type].gen.prototype=Object.create(Blocks.standard.prototype);
    }
    return Blocks;
});