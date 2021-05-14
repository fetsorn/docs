---
id: dodonomics
title: DODO 代币经济 V2
sidebar_label: DODO 代币经济 V2
---

DODO V2 平台上将有3类主要用户：交易者，流动池创建者和流动性提供者。DODO 代币经济模型也将升级以更好的激励DODO 平台的多样用户协同增长。

## 摘要

- 除了治理权，DODO 代币有 2个新功能：
    - 持有者将享有IDO和众筹建池的打新额度。
    - DODO 平台的交易手续费折扣。
- 引入vDODO 作为会员证明 (proof of membership)，质押100个DODO，可以铸成一个vDODO，vDODO 不支持转账。
- vDODO 持有者享有与持有 DODO一样的权益，此外享有交易手续费分红和会员奖励。
- 将vDODO 赎回为 DODO 代币，需缴纳「退会费」给未退出的会员。
- 将会展开交易挖矿和联合多挖，以激励平台的用户增长。

## DODO 功能和价值捕获

**DODO 是一个治理代币**，同时也被赋予一定的功能。持有DODO，你将享有以下权益：
- 提案和投票权
- DODO平台上的 IDO和众筹的认购份额
- 交易手续费折扣

**vDODO 是一种会员凭证**，会员系统为忠诚的持币用户设立。持有vDODO，你将享有以下权益：
- 交易手续费分红
- vDODO 会员奖励
- 提案和投票权
- DODO平台上的 IDO和众筹的认购份额
- 交易手续费折扣

## 铸造和赎回 vDOOD

### 铸造 vDODO 得到会员奖励

质押100个DODO可以铸造成1个vDODO。vDODO不可转账。vDODO可获得会员奖励：
- 每个区块释放6个DODO代币，奖励给vDODO持有者。
- vDODO 持有者按比例分得 DODO 会员奖励。
- 邀请其他人铸造 vDODO，额外获得被邀请人奖励的10% 。
- vDODO会员系统启动的最初7天内，会员奖励加倍。

### 赎回 vDODO 缴纳退会费

把 vDODO 赎回成 DODO，需要按比例缴纳退会费。这笔退会费，会以vDODO的形式，即时分配给未退出的所有vDODO持有者。

定义“vDODO数量*100”除以“DODO流通数量”为「DODO忠诚指数」，忠诚指数越高，退会费越低：

- 当忠诚指数大于0.5时，有超过50%的流通DODO被抵押，退会费达到下限，5%。
- 随着忠诚指数下降，退会费逐渐提高。
- 当忠诚指数小于0.1时，只有少于10%的流通DODO被抵押，退会费达到上限，15%。

下面我们给出更具体的公式：（定义忠诚指数为x，罚金率为y）

- 当 x>0.5 时，y = 0.05
- 当 x<0.1时，y = 0.15
- 当 x>0.1 && x<0.5时，y = 0.175 - 0.25 * x

![](https://dodoex.github.io/cn/img/vdodo_1.png)


## 总结

代币承载了「激励增长」与「捕获价值」的双重功能。DODO团队始终将这两个功能视作代币经济设计的核心。

我们会以高性价比的激励活动分发DODO代币，帮助平台和社区增长。同时，DODO代币将用于捕捉平台的全部价值，并分配给DODO的忠诚持有者。

在 DODO 代币总供应中，预留了高达60% 用于社区激励。这部分数额如此巨大，以至于我们无法在一开始就确定它们的使用方法。同时，DODO的业务场景越来越丰富，用户数量越来越多，如何捕捉价值也成为团队的重要课题。