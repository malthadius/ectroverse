<template>
    <GamePage id="council">
        <div id="council_content" slot="content">
            <display-box title="Council">
                <div class="text" slot="content">
                    <div id="council_columns">
                        <div id="column_one">
                            <b>Energy</b>
                            <div class="council_stat_list" id="energy">
                                <div class="council_stat_list_names">
                                    <div>Production:</div>
                                    <div>Decay:</div>
                                    <div>Buildings upkeep:</div>
                                    <div>Units upkeep:</div>
                                    <div>Portals upkeep:</div>
                                    <div>Population reduction:</div>
                                    <div>Energy Income:</div>
                                </div>
                                <div class="council_stat_list_counts">
                                    <div>{{energy_production}}</div>
                                    <div>{{energy_decay}}</div>
                                    <div>{{buildings_upkeep}}</div>
                                    <div>{{units_upkeep}}</div>
                                    <div>{{portals_upkeep}}</div>
                                    <div>{{population_reduction}}</div>
                                    <div>{{energy_income}}</div>
                                </div>

                            </div>
                            <b>Buildings</b>
                            <div class="council_stat_list" id="buildings">
                                <div class="council_stat_list_names">
                                    <div>Solar collectors:</div>
                                    <div>Fission reactors:</div>
                                    <div>Mineral Plants:</div>
                                    <div>Crystal laboritories:</div>
                                    <div>Refinement stations:</div>
                                    <div>Cities:</div>
                                    <div>Research centers:</div>
                                    <div>Defense satelites:</div>
                                    <div>Shield Network:</div>
                                    <div>Portal:</div>
                                    <div>Total:</div>
                                </div>
                                <div class="council_stat_list_counts">
                                    <div>{{buildings_solar_collectors}}</div>
                                    <div>{{buildings_fission_reactors}}</div>
                                    <div>{{buildings_mineral_plants}}</div>
                                    <div>{{buildings_crystal_laboritories}}</div>
                                    <div>{{buildings_refinement_stations}}</div>
                                    <div>{{buildings_cities}}</div>
                                    <div>{{buildings_research_centers}}</div>
                                    <div>{{buildings_defense_satelites}}</div>
                                    <div>{{buildings_shield_networks}}</div>
                                    <div>{{buildings_portals}}</div>
                                    <div>{{buildings_total}}</div>
                                </div>

                            </div>
                            <div id="buildings_under_construciton">
                                <b>Buildings under construction</b>
                                <div>None</div>
                            </div>
                        </div>
                        <div id="column_two">
                            <b>Resources</b>
                            <div class="council_stat_list" id="resources">
                                <div class="council_stat_list_names">
                                    <div>Mineral produced:</div>
                                    <div>Mineral income:</div>
                                    <div>Crystal produced:</div>
                                    <div>Crystal Decay:</div>
                                    <div>Crystal income:</div>
                                    <div>Ectrolium produced:</div>
                                    <div>Ectrolium income:</div>
                                </div>
                                <div class="council_stat_list_counts">
                                    <div>{{mineral_produced}}</div>
                                    <div>{{mineral_income}}</div>
                                    <div>{{crystal_produced}}</div>
                                    <div>{{crystal_decay}}</div>
                                    <div>{{crystal_income}}</div>
                                    <div>{{ectrolium_produced}}</div>
                                    <div>{{ectrolium_income}}</div>
                                </div>
                            </div>
                            <b>Units</b>
                            <div class="council_stat_list" id="units">
                                <div class="council_stat_list_names">
                                    <div>Bombers:</div>
                                    <div>Fighters:</div>
                                    <div>Transports:</div>
                                    <div>Cruisers:</div>
                                    <div>Carriers:</div>
                                    <div>Soldiers:</div>
                                    <div>Droids:</div>
                                    <div>Goliaths:</div>
                                    <div>Phantoms:</div>
                                    <div>Psychics:</div>
                                    <div>Agents:</div>
                                    <div>Ghost ships:</div>
                                    <div>Exploration ships:</div>
                                    <div>Total:</div>
                                </div>
                                <div class="council_stat_list_counts">
                                    <div>{{units_bombers}}</div>
                                    <div>{{units_fighters}}</div>
                                    <div>{{units_transports}}</div>
                                    <div>{{units_cruisers}}</div>
                                    <div>{{units_carriers}}</div>
                                    <div>{{units_soldiers}}</div>
                                    <div>{{units_droids}}</div>
                                    <div>{{units_goliaths}}</div>
                                    <div>{{units_phantoms}}</div>
                                    <div>{{units_psychics}}</div>
                                    <div>{{units_agents}}</div>
                                    <div>{{units_ghost_ships}}</div>
                                    <div>{{units_exploration_ships}}</div>
                                    <div>{{units_total}}</div>
                                </div>
                            </div>

                            <div id="units_under_construciton">
                                <b>Units under construction</b>
                                <div>None</div>
                            </div>

                        </div>
                    </div>
                </div>
            </display-box>
        </div>
    </GamePage>

</template>

<script>
    import DisplayBox from "../../components/DisplayBox";
    import GamePage from "../../components/GamePage";

    export default {
        name: "Council",
        components: {
            GamePage,
            DisplayBox,
        },
        data() {
            return {
                energy_production: 1239123,
                energy_decay: 132981,
                buildings_upkeep: 123123,
                units_upkeep: 12391239,
                portals_upkeep: 123414,
                population_reduction: 3942934,
                energy_income: 18291238,

                buildings_solar_collectors: 219348123,
                buildings_fission_reactors: 18231823,
                buildings_mineral_plants: 129381923,
                buildings_crystal_laboritories: 1293913,
                buildings_refinement_stations: 12093123,
                buildings_cities: 123921,
                buildings_research_centers: 192312,
                buildings_defense_satelites: 129381,
                buildings_shield_networks: 12983,
                buildings_portals: 59382,
                buildings_total: 1293801983,

                mineral_produced: 1928123,
                mineral_income: 1293812,
                crystal_produced: 12398123,
                crystal_decay: 1293812,
                crystal_income: 12938123,
                ectrolium_produced: 129831,
                ectrolium_income: 19283,

                units_bombers: 1923,
                units_fighters: 291313,
                units_transports: 9123,
                units_cruisers: 123123,
                units_carriers: 9121239,
                units_soldiers: 192312,
                units_droids: 1293123,
                units_goliaths: 23123,
                units_phantoms: 12931,
                units_psychics: 12,
                units_agents: 192312,
                units_ghost_ships: 1293,
                units_exploration_ships: 111,
                units_total: 210930123
            }
        }
    }
</script>

<style scoped>
    #council {
        display: flex;
        flex-direction: row;
        width: 100%;
    }

    #council_content {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    #council_columns {
        width: 100%;
        display: flex;
        flex-direction: row;
    }

    #column_one {
        width: 50%
    }

    #column_two {
        width: 50%
    }

    #energy {
        padding: 20px;
    }

    #buildings {
        padding: 20px;
    }

    #resources {
        padding: 20px;
    }

    #units {
        padding: 20px;
    }

    .council_stat_list {
        display: flex;
        flex-direction: row;
        width: 100%%;
        justify-content: center;

    }

    .council_stat_list_names {
        text-align: left;
        white-space: nowrap;
        width: auto;
    }

    .council_stat_list_counts {
        text-align: right;
        white-space: nowrap;
        width: auto;
    }
</style>