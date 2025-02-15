//=============================================================================
// PluginPattern.js                                                             
//=============================================================================


/*:
*
* @author Plugin Author Name
* @plugindesc The description of my plugin.
*
* @param Example Param 1
* @desc A descrtion for a parameter for my plugin.
* @default 400
*
* @param Example Param 2
* @desc A description of my second param which is a string
* @default Example Test
* 
* @help
* This is where you put the help information for your plugin.
* 
//=============================================================================
//  Contact Information
//=============================================================================
*
* Contact me via twitter: EISKino, or on the rpg maker forums.
* Username on forums: Kino.
*
* Forum Link: http://forums.rpgmakerweb.com/index.php?/profile/75879-kino/
* Website Link: http://endlessillusoft.com/
* Twitter Link: https://twitter.com/EISKino
* Patreon Link: https://www.patreon.com/EISKino
*
* Hope this plugin pattern helps, and enjoy!
* --Kino
*/

//Namespace for any code you create; replace this with your own name
const Taku = {};

(function($) {

//=============================================================================
// PluginManager Parameters                                                             
//=============================================================================

  //Registers the Plugin for use 
  var parameters = PluginManager.parameters("PluginPattern");
  //A place that holds all the parameters from your plugin params above
  const PluginPatternParams = {
    ExampleParam1: Number(parameters['Example Param 1']),
    ExampleParam2: String(parameters['Example Param 2'])
  };

  $.addBattleLog = (text) => {
    if (BattleManager._logWindow){
        BattleManager._logWindow.push("addText", text)
    }
  }

  $.rouletteV1DamageCalculator = function (enemyMaxHp) {
    // 随机生成1到6之间的整数
    const dice = Math.floor(Math.random() * 6) + 1;
    let tarot = '';
    let damage = 0;
    // 根据骰子结果确定塔罗牌类型和伤害值
    if (dice >= 1 && dice <= 3) {
        tarot = '倒吊人';
        damage = 0; // 伤害为0
    } else if (dice >= 4 && dice <= 5) {
        tarot = '战车';
        damage = Math.floor(enemyMaxHp * 0.4); // 伤害为敌人生命值的40%
    } else if (dice === 6) {
        tarot = '死神';
        damage = Math.floor(enemyMaxHp * 1.2); // 伤害为敌人生命值的120%
    }
    // 将塔罗牌结果加入战斗历史
    log = '指针停留在' + tarot + '!';
    $.addBattleLog(log);
    // 返回计算后的伤害值
    const finalDamage = Math.round(damage);
    return finalDamage
  }
  console.log('启动，启动启动！')
})(Taku);